const Dropdown = ({selectedLang, setSelectedLang, langOptions, dropdownLabel, onLanguageSelect}) => {

  const options = langOptions.map(lang => {
    return(
    <option value={lang.value}>{lang.label}</option>
    )
  })
  
  const onLanguageChange = (e) => {
    setSelectedLang(e.target.value)
    onLanguageSelect(e.target.value)
  }
  
  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">{dropdownLabel}</label>
      <select
        onChange={onLanguageChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
      {options}
    </select>
</div>
  );
};

export default Dropdown;