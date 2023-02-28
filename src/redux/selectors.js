export const getContact = ({ contacts }) => contacts;

export const getFilter = (state) => state.filter;

export const getFilterContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilter);
  });
  return result;
};
