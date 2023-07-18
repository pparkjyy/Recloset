export interface CommentTypes {
  commentId: number | string;
  content: string;
  createAt: string;
  modifyAt: string;
  writer: AdminTypes;
}

export interface WriterTypes {
  memberId: number | string;
  name: string;
}

export interface AdminTypes {
  adminId: number | string;
  name: string;
}

export interface QnaTypes {
  questionId: number | string;
  title: string;
  content: string;
  createAt: string;
  modifyAt: string;
  view: number | string;
  writer?: WriterTypes;
  qcomments?: CommentTypes[];
}

export interface ProductTypes {
  name: string;
  price: number | string | null;
  product_id: number | string;
  member_id: number | string;
  category: string;
  title: null;
  content: string;
  image_link: string;
  modify_at: string;
  create_at: string;
  productlike: number | string;
  view: number | string;
  condition_value: null;
}

export interface UserInfoTypes {
  email: string;
  isBan: boolean;
  memberId: number | string;
  money: number | string;
  name: string;
  phone: string;
  profile: string;
}
