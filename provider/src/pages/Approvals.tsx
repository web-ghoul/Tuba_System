import React, { useState } from 'react';
import PrimaryTable from '../components/Tables/PrimaryTable';
import { PrimaryContainer } from '../mui/containers/PrimaryContainer';
import { ClaimRecord, Filters } from '../types/claimRecord';
import { Box, Button, TextField, MenuItem, Typography, IconButton, Popover } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import GetAppIcon from '@mui/icons-material/GetApp';

const mockData: ClaimRecord[] = Array.from({ length: 30 }, (_, i) => {
    const id = i + 1;
    const names = ['أحمد محمد', 'سارة علي', 'يوسف حسن', 'منى خالد', 'محمود سعيد'];
    const nationalities = ['مصري', 'سعودي', 'أردني', 'سوداني', 'سوري'];
    const statuses = ['Approved', 'Pending', 'Rejected'];

    const name = names[i % names.length];
    const nationality = nationalities[i % nationalities.length];
    const issueDate = `2025-04-${(i % 28 + 1).toString().padStart(2, '0')}`;
    const total = 900 + (i * 10);
    const vat = total * 0.15;
    const totalWithVat = total + vat;
    const status = statuses[i % statuses.length];

    return {
        id,
        name,
        nationality,
        issueDate,
        total,
        vat,
        totalWithVat,
        status,
    };
});

const ApprovalsPage: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({
        nationalId: '',
        workflowState: '',
        issueDate: '',
    });
    const [limit, setLimit] = useState<number>(10);


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

    const filteredData = mockData.filter((record) => {
        const matchesNationalId = filters.nationalId ? record.id.toString().includes(filters.nationalId) : true;
        const matchesWorkflow = filters.workflowState ? record.status === filters.workflowState : true;
        const matchesDate = filters.issueDate ? record.issueDate.includes(filters.issueDate) : true;
        return matchesNationalId && matchesWorkflow && matchesDate;
    });
    const displayedData = filteredData.slice(0, limit);


    return (
        <PrimaryContainer className="!grid gap-4">
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


                <Button variant="outlined" startIcon={<FilterListIcon />} onClick={handleOpenFilter}>
                    فلترة
                </Button>

                <Box flexGrow={1} />

                <Button variant="contained" startIcon={<GetAppIcon />} color="success">
                    تصدير Excel
                </Button>
                <Button variant="contained" startIcon={<GetAppIcon />} color="error">
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
                        label="الرقم القومي"
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
                        <MenuItem value="Approved">مقبول</MenuItem>
                        <MenuItem value="Rejected">مرفوض</MenuItem>
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

            {/* Table */}
            <PrimaryTable data={displayedData} />
        </PrimaryContainer>
    );
};

export default ApprovalsPage;
