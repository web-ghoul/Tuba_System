import { ReadonlyInputProps } from "../../types/services";

export const ReadonlyInput: React.FC<ReadonlyInputProps> = ({ label, id, value = '-', percent }) => (
    <div className="flex flex-col">
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type="text"
            id={id}
            readOnly
            value={percent ? `${value}%` : value}
            className="form-control-solid text-green-600 bg-gray-100 rounded border border-gray-300 px-3 py-2 focus:outline-none"
        />
    </div>
);
