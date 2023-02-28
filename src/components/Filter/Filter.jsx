import css from "./Filter.module.css";


export const Filter = ({onFilter,value}) => {
   
   
    return (
        <div className={css.box}>
            <label className={css.contactLabel}>
            Find contacts by name
            </label>
            <input
            className={css.field}
            type="text"
            name="filter"
            value={value}
            onChange={onFilter}
           />
        </div>
    )
}