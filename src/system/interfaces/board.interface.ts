export interface BoardInterface {
  id?: string;
  name?: string;
  ports?: number;
  status?: 'active' | 'inactive';
  date?: number;
}
