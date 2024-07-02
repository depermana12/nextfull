type Props = {
  params: {
    slug: string[];
  };
  // query string params
  searchParams: {
    sortOrder: string;
  };
};

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} {sortOrder}{" "}
    </div>
  );
};
export default ProductPage;
