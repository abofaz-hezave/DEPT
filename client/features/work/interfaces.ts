export interface Client {
  id: string;
  title: string;
  logo: string;
}

export interface Work {
  id: string;
  title: string;
  companyName: string;
  image: string | null;
  categoryId: string;
  industryId: string;
}

export interface FetchPortfoliosProps {
  categoryId: string | string[] | undefined;
  industryId: string | string[] | undefined;
}

export interface FilterItem {
  id: string;
  title: string;
}

export interface SearchItemProps {
  isVisible: boolean;
  filterType: string;
  itemData: FilterItem[];
}

export enum FilterTypes {
  CATEGORY = 'category',
  INDUSTRY = 'industry',
}
