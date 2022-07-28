import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { colorLogState } from '../../recoil/Atom';
import ColorLogPageComponents from '../../components/ColorLogPageComponents';

const MyPage = () => {
	const [usertext, setUserText] = useState('');
	const [userpost, setUserPost] = useState([]);
	const [userdata, setUserData] = useState([]);
	const [editable, setEditable] = useState(false);
	const [buttonClick, setButtonClick] = useRecoilState(colorLogState);
	useEffect(() => {
		getUserData();
	}, []);
	const getUserData = async () => {
		try {
			await axios
				.get('http://localhost:8000/api/users/user', config)
				.then(e => setUserData(e.data));
			setUserText(userdata.profileText);
			await axios
				.get('http://localhost:8000/api/posts/user', config)
				.then(e => setUserPost(e.data));
		} catch (err) {
			alert(err);
		}
	};
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			axios({
				method: 'patch',
				url: `http://localhost:8000/api/users/${userdata.id}`,
				headers: { Authorization: `Bearer ${token}` },
				data: {
					profileText: usertext,
				},
			});
			setEditable(!editable);
		}
	};
	//axios bearer token
	const token = window.localStorage.getItem('token');
	let config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const handleProfileText = () => {
		setEditable(!editable);
	};
	const handleButtonClick = () => {
		setButtonClick(true);
	};
	return (
		<Page>
			<Profile>
				<ProfileHeader>
					<ProfileImg>
						<Img src="img/airport.jpg" />
						<UserName>{userdata.name}</UserName>
					</ProfileImg>

					{!editable ? (
						<ProfileInfo>{usertext} </ProfileInfo>
					) : (
						<ProfileInfo>
							<input
								type="text"
								value={usertext}
								onChange={e => {
									setUserText(e.target.value);
								}}
								onKeyDown={handleKeyDown}
							/>
						</ProfileInfo>
					)}
					<button onClick={handleProfileText}>글쓰기</button>
				</ProfileHeader>
				<MyInfo>
					<MyInfoBox>
						<p>내 여행</p>
						<MyLog>3</MyLog>
					</MyInfoBox>
					<MyInfoBox>
						<p>여행글</p>
						<MyLog>{userpost.length}</MyLog>
					</MyInfoBox>
					<MyInfoBox onClick={handleButtonClick}>
						<p>컬러로그</p>
					</MyInfoBox>
				</MyInfo>
			</Profile>
			<PostMenu>
				<PostIcon src="img/posticon.png" />
				<Post>게시물</Post>
			</PostMenu>
			<Feed>
				<ImgFeed src="img/airport.jpg" />
				<ImgFeed src="img/beach.jpg" />
				<ImgFeed src="img/hamburg.jpg" />
				<ImgFeed src="img/people.jpg" />
				<ImgFeed src="img/avatar.jpg" />
				{userpost.map(post => (
					<div key={post.id}>
						<a href="www.naver.com">
							<ImgFeed src={post.mainImg} />
						</a>
					</div>
				))}
			</Feed>
			{buttonClick && <ColorLogPageComponents />}
		</Page>
	);
};
export default MyPage;

const Page = styled.div`
	width: 60rem;
	margin: 3rem auto;
	background-color: red;
`;

const Profile = styled.div`
	width: 60rem;
	height: 23rem;
`;

const PostMenu = styled.div`
	border-top: 1px solid lightgrey;
	height: 3rem;
	display: flex;
	width: 60rem;
	justify-content: center;
`;

const PostIcon = styled.img`
	width: 1rem;
	display: flex;
	align-items: center;
	height: 1rem;
	padding-top: 1rem;
	margin-right: 0.5rem;
`;
const Post = styled.p`
	height: 3rem;
	display: flex;
	align-items: center;
	font-size: 0.5rem;
`;
const ProfileHeader = styled.div`
  display: flex;
  width: 60vw;
  heigth:40vh
  justify-content: space-around;
`;
const ProfileImg = styled.div`
	display: flex;
	flex-direction: column;
	width: 40vw;
	align-items: center;
`;
const ProfileInfo = styled.section`
	display: flex;
	align-items: center;
	width: 50rem;
	justify-content: flex-start;

	& input {
		width: 100%;
		height: 100%;
	}
`;

const Img = styled.img`
	border-radius: 50%;
	width: 10rem;
	height: 10rem;
`;

const MyInfo = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 4rem;
	width: 60rem;
`;
const MyInfoBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 14rem;
	height: 3rem;
	background-color: #edf7fa;
	align-items: center;
	line-height: 3rem;
	border-radius: 1rem;
	font-size: 1rem;
	cursor: pointer;
`;
const MyLog = styled.p`
	display: block;
	width: 2rem;
	height: 2rem;
	border-radius: 1rem;
	text-align: center;
	line-height: 2rem;
	background-color: #fff;
`;
const UserName = styled.p`
	font-size: 1.5rem;
	margin-top: 1.5rem;
`;

const Feed = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem 0;
	width: 60rem;
`;

const ImgFeed = styled.img`
	width: 17rem;
	height: 20rem;
	box-sizing: border-box;
	margin: auto;
	object-fit: fill;
	cursor: pointer;
	&:hover {
		filter: brightness(20%);
	}
`;
