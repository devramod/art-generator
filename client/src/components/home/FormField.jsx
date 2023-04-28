const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  supriseMe,
  handleSupriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-slate-900"
        >
          {label}
        </label>
        {supriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className="px-3 py-1 bg-slate-200 rounded-md text-slate-900 text-sm font-medium"
          >
            Suprise me
          </button>
        )}
      </div>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="block w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-violet-700 focus:border-slate-700"
      />
    </div>
  );
};

export default FormField;
