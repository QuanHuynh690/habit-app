export interface FetchItemsWithoutPageDto<T> {
  items: T[];
}

export interface FetchItemsDto<T> extends FetchItemsWithoutPageDto<T> {
  totalPages: number;
  pageIndex: number;
  itemsPerPage: number;
}
