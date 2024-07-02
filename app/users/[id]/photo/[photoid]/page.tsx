type Props = {
  params: {
    id: number;
    photoid: number;
  };
};

const UserPhotoDetails = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      UserPhotoDetails {id} {photoid}{" "}
    </div>
  );
};
export default UserPhotoDetails;
