import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useAutocompleteService } from '../services/autoCompleteService';

export interface AutocompleteOption {
    id: string;
    name: string;
    price: number;
}

export const useServicesAutoComplete = (searchTerm: string) => {
    const [options, setOptions] = useState<AutocompleteOption[]>([]);
    const [loading, setLoading] = useState(false);
    const { fetchOptions } = useAutocompleteService();

    const getOptions = async (term: string) => {
        setLoading(true);
        try {
            const data = await fetchOptions(
                '/document/TB Medical Provider Claim Item Price?filters=[]&fields="*"',
                term
            );

            if (Array.isArray(data.data)) {
                const mapped = data.data.map((item: { name: any; claim_item_name: any; resell_price_sar: any; }) => ({
                    id: item.name,
                    name: item.claim_item_name,
                    price:item.resell_price_sar,
                }));
                setOptions(mapped);
            } else {
                console.warn('Unexpected options format:', data);
                setOptions([]);
            }
        } catch (err) {
            console.error('Failed to fetch options', err);
            setOptions([]);
        } finally {
            setLoading(false);
        }
    };




    const debouncedFetch = debounce(getOptions, 500);

    useEffect(() => {
        if (searchTerm) {
            debouncedFetch(searchTerm);
        } else {
            setOptions([]);
        }

        return () => {
            debouncedFetch.cancel();
        };
    }, [searchTerm]);

    return { options, loading };
};
