import axios from "axios";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { BASE_URL, IMG_URL } from "@/constants/constants";
import SubTitleBar from "@/components/SubTItleBar/SubTitleBar";
import ProductItem from "@/components/Item_product/ProductItem";
import CustomPagination from "@/components/Pagination/CustomPagination";
import SelectBox from "@/components/SelectBox/SelectBox";

interface Product {
  image_link: string;
  productlike: boolean;
  name: string;
  price: string;
  product_id: string | number;
}
const options = [
  "최신순",
  "오래된순",
  "좋아요순",
  "조회수순",
  "가격낮은순",
  "가격높은순",
];

const ManageProductsPage = () => {
  const [clothesList, setClothesList] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState("newest");
  const products = clothesList.map((product, idx) => {
    return (
      <ProductItem
        key={`product_${idx}`}
        url={`${IMG_URL}/${product.image_link}`}
        isSell={false}
        like={product.productlike}
        title={product.name}
        price={product.price}
        product_id={product.product_id}
      />
    );
  });
  useEffect(() => {
    (async () => {
      try {
        const list = await axios.get(
          `${BASE_URL}/products?page=${page}&size=24&sort=${filter}&issell=false`
        );
        setClothesList(list.data.data);
        setTotalPage(list.data.pageInfo.totalPages);
        window.scrollTo(0, 0);
      } catch (err) {
        console.error("Error getting clothes list", err);
      }
    })();
  }, [filter, page]);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <SubTitleBar title="상품 관리" isButton={false} />
      <S.Container>
        <S.ContentConatiner>
          <S.SubTitleContainer>
            <S.Title>상품 관리</S.Title>
            <S.SelectBoxContainer>
              <SelectBox
                usage={"정렬"}
                options={options}
                setOption={setFilter}
              />
            </S.SelectBoxContainer>
          </S.SubTitleContainer>
          <S.CustomDivider />
          {clothesList.length ? (
            <S.ProductsContainer>{products}</S.ProductsContainer>
          ) : (
            <S.EmptyList>리스트가 비어있습니다.</S.EmptyList>
          )}
          <CustomPagination
            pageCount={totalPage}
            page={page}
            setPage={setPage}
          />
        </S.ContentConatiner>
      </S.Container>
    </div>
  );
};

export default ManageProductsPage;
