import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdNotificationsActive, MdNotificationsNone } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout, newStatus } from '../redux/actions';
import Button from './Button';
import PropTypes from 'prop-types';

const ServieceHeader = styled.header`
  /* 헤더 기본 스타일 */
  background-color: rgba(255, 255, 255, 0.2);
  height: 6em;

  /* 헤더의 요소 정렬 */
  .header-container {
    margin: 0px 320px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 80%; */
    height: 100%;
    /* margin-left: 10%;
    margin-right: 10%; */
  }

  /* a태그 타이포그래피 스타일 삭제 */
  .title-box {
    text-decoration: none;
    /* 서비스명 글자크기 변경 */
    h1 {
      margin: 0;
      font-size: 2.5rem;
      color: white;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;

  .user-info-icon {
    width: 42px;
    height: 42px;
    color: black;
    margin-left: 20px;
  }
`;

// const LinkBox = styled.a`
//   height: 42px;
// `;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const isNew = useSelector((state) => state.new.isNew);
  const memberId = useSelector((state) => state.user.memberId);

  const handleNewStatus = () => {
    dispatch(newStatus(!isNew));
  };
  console.log(handleNewStatus);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refresh');
    localStorage.removeItem('isLogin');
    dispatch(logout());
    navigate('/');
  };

  const handleWriteClick = () => {
    alert('모집날짜로부터 2일 전 모집이 마감됩니다.');
  };
  return (
    <ServieceHeader>
      <div className="header-container">
        <Link to="/" className="title-box">
          <h1>Celebee</h1>
        </Link>
        {isLogin ? (
          <ButtonBox>
            <Link to="/boards/new-boards">
              <Button type="based" text="New Card!" onClick={handleWriteClick} />
            </Link>
            {isNew ? (
              <Button
                type="notification"
                text={<MdNotificationsActive className="noti-icon" />}
              />
            ) : (
              <Button
                type="notification"
                text={<MdNotificationsNone className="noti-icon" />}
              />
            )}
            <Link to={`/members/${memberId}`} className="user-info">
              <FaRegUserCircle className="user-info-icon" />
            </Link>
            <Button type="based" text="Logout" onClick={handleLogout} />
          </ButtonBox>
        ) : (
          <ButtonBox>
            <Link to="/members/login">
              <Button type="based" text="Log In" />
            </Link>
            <Link to="/members">
              <Button type="based" text="Sign Up" />
            </Link>
          </ButtonBox>
        )}
      </div>
    </ServieceHeader>
  );
};

Header.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setIsLogin: PropTypes.func.isRequired,
};

export default Header;
