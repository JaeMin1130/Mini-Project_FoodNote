const Picture = () => {
  return (
    <form>
      <label className="signup-profileImg-label" htmlFor="profileImg">
        프로필 이미지 추가
      </label>
      <input className="signup-profileImg-input" type="file" accept="image/*" id="profileImg" />
    </form>
  );
};
export default Picture;
