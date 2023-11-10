import { createSelector } from '@reduxjs/toolkit';
import { getFilterValue } from 'redux/filter/selectors';

export const selectContactsItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, getFilterValue],
  (contactsItems, filter) => {
    return contactsItems.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);