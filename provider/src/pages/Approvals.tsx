import React, { useState, useEffect } from 'react';
import PrimaryTable from '../components/Tables/PrimaryTable';
import { PrimaryContainer } from '../mui/containers/PrimaryContainer';
import { ClaimRecord, Filters } from '../types/claimRecord';
import {CLAIM_REQUEST_STATUSES} from '../constants/claimStatus'; // adjust the path if needed
import { Box, Button, TextField, MenuItem, Typography, Popover, CircularProgress } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import GetAppIcon from '@mui/icons-material/GetApp';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { getAllClaims } from '../services/dashboardService'; // 👈 Adjust path if needed

const ApprovalsPage: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({
        nationalId: '',
        workflowState: '',
        issueDate: '',
    });

    const [limit, setLimit] = useState<number>(10);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [claims, setClaims] = useState<ClaimRecord[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchClaims = async () => {
            try {
                setLoading(true);
                const response = await getAllClaims();

                setClaims(response.data.data);
            } catch (error) {
                console.error('Failed to fetch claims:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClaims();
    }, []);

    const handleOpenFilter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseFilter = () => {
        setAnchorEl(null);
    };

    const applyFilter = () => {
        handleCloseFilter();
    };

    const resetFilter = () => {
        setFilters({ nationalId: '', workflowState: '', issueDate: '' });
    };

    const filteredData = claims.filter((record) => {
        const matchesNationalId = filters.nationalId ? record.name.toString().includes(filters.nationalId) : true;
        const matchesWorkflow = filters.workflowState ? record.workflow_state === filters.workflowState : true;
        const matchesDate = filters.issueDate ? record.issue_date.includes(filters.issueDate) : true;
        return matchesNationalId && matchesWorkflow && matchesDate;
    });

    const displayedData = filteredData.slice(0, limit);

    // Empty state component
    const EmptyState = () => (
        <Box className="flex flex-col items-center justify-center h-64 w-full bg-gray-50 rounded-lg border border-gray-200">
            <SearchOffIcon className="text-gray-400" style={{ fontSize: 60 }} />
            <Typography variant="h6" className="mt-4 text-gray-600">لا توجد بيانات</Typography>
            <Typography variant="body2" className="text-gray-500 mt-2 text-center max-w-md">
                لم يتم العثور على سجلات تطابق معايير البحث المحددة
            </Typography>
            <Button 
                variant="outlined" 
                color="primary" 
                className="mt-4"
                onClick={resetFilter}
            >
                إزالة الفلترة
            </Button>
        </Box>
    );

    return (
        <PrimaryContainer className="!grid gap-4 ">
            {/* Toolbar */}
            <Box className="flex items-center gap-3">
                <Typography className="whitespace-nowrap">عرض الصفوف</Typography>
                <TextField
                    size="small"
                    select
                    label="Limit"
                    value={limit}
                    onChange={(e) => setLimit(Number(e.target.value))}
                >
                    {[10, 25, 50].map((limitOption) => (
                        <MenuItem key={limitOption} value={limitOption}>
                            {limitOption}
                        </MenuItem>
                    ))}
                </TextField>

                <Button className="border rounded-lg" variant="outlined" startIcon={<FilterListIcon />} onClick={handleOpenFilter}>
                    فلترة
                </Button>

                <Box flexGrow={1} />

                <Button variant="contained" startIcon={<GetAppIcon />} className="bg-gradient-to-r from-[#5A46E6] to-[#2AD2C9] hover:from-[#4936ca] hover:to-[#23b3ac] 
                    rounded-3xl border-none py-2 px-6 text-white font-semibold shadow-md
                    hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5
                    normal-case">
                    تصدير XlS
                </Button>
                <Button variant="contained" startIcon={<GetAppIcon />} className="bg-#5A46E6 border rounded-3xl">
                    تصدير PDF
                </Button>
            </Box>

            {/* Filter Popover */}
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleCloseFilter}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Box className="p-4 w-72 space-y-4">
                    <TextField
                        fullWidth
                        label="الرقم "
                        value={filters.nationalId}
                        onChange={(e) => setFilters({ ...filters, nationalId: e.target.value })}
                    />
                  
                    <TextField
                        fullWidth
                        label="الحالة"
                        select
                        value={filters.workflowState}
                        onChange={(e) => setFilters({ ...filters, workflowState: e.target.value })}
                    >
                        <MenuItem value="">--</MenuItem>
                        {Object.entries(CLAIM_REQUEST_STATUSES).map(([key, value]) => (
                            <MenuItem key={key} value={key}>
                                {value.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        fullWidth
                        label="تاريخ الإصدار"
                        value={filters.issueDate}
                        onChange={(e) => setFilters({ ...filters, issueDate: e.target.value })}
                    />

                    <Box className="flex justify-between gap-2">
                        <Button onClick={applyFilter} variant="contained" color="primary" fullWidth>
                            تطبيق الفلترة
                        </Button>
                        <Button onClick={resetFilter} variant="outlined" color="secondary" fullWidth>
                            إزالة الفلترة
                        </Button>
                    </Box>
                </Box>
            </Popover>

            {/* Table, Empty State, or Loader */}
            {loading ? (
                <Box className="flex justify-center items-center h-64">
                    <CircularProgress />
                </Box>
            ) : filteredData.length > 0 ? (
                <PrimaryTable data={displayedData} />
            ) : (
                <EmptyState />
            )}
        </PrimaryContainer>
    );
};

export default ApprovalsPage;