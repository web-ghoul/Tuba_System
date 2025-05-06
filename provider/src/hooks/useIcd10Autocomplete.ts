// hooks/useIcd10Autocomplete.ts
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { useAutocompleteService } from '../services/autoCompleteService';

export interface AutocompleteOption {
  label: string;
  value: string;
}

export const useIcd10Autocomplete = (searchTerm: string) => {
  const [options, setOptions] = useState<AutocompleteOption[]>([]);
  const [loading, setLoading] = useState(false);
  const { fetchOptions } = useAutocompleteService();

  const getOptions = async (term: string) => {
    setLoading(true);
    try {
      const data = await fetchOptions(
        '/document/TB Medical Claim Item?filters=[["is_group","=","false"], ["parent_tb_medical_claim_item","=","MCIG-ICD"]]&fields="*"',
        term
      );
  
      if (Array.isArray(data.data)) {
        const mapped = data.data.map((item: { name1: any; name: any; }) => ({
          label: item.name1,
          value: item.name,
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
