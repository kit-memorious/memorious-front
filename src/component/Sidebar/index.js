import { Dropdown } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instance } from "../../config";
import InviteModal from "../Invite/InviteModal";
import { sidebarMenuList } from "./sidebarMenu";
import { bottomSettingMenuBox, groupBox, groupBoxWrapper, imageBox, sideBarLabel, sidebarContainer, test } from "./style";
/** @jsxImportSource @emotion/react */

function SidebarContainer() {
    const { pathname } = useLocation();

    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const navigateToPage = route => () => {
        navigate(route);
    };

    const handleInviteClick = () => {
        setModalOpen(true);
    };

    const handleTestClick = async () => {
        try {
            const response = await instance.get("/api/account/principal");
            console.log("response", response);
        } catch (error) {
            console.log("error", error);
        }
    };
    const items = [
        {
            key: "1",
            label: <span onClick={() => navigate("/setting/myfamily")}>가족페이지</span>,
        },
        {
            key: "2",
            label: <span onClick={() => navigate("/setting/mypage")}>마이페이지</span>,
        },
        {
            key: "3",
            label: <span onClick={handleInviteClick}>가족초대하기</span>,
        },
    ];

    return (
        <div css={sidebarContainer}>
            <div className="img-wrapper">
                <div css={imageBox} />
            </div>
            <div css={groupBoxWrapper}>
                <div css={groupBox}>
                    {sidebarMenuList.map(e => (
                        <div key={e.title} className="group-box">
                            <div className={pathname.includes(e.route) ? "filled" : ""} onClick={navigateToPage(e.route)} css={sideBarLabel}>
                                {e.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* todo : 기능 완료 후 삭제 */}
            <div css={test} onClick={handleInviteClick}>
                가족초대하기
            </div>
            <div css={test} onClick={handleTestClick}>
                {" "}
                TestBtn
            </div>
            <div css={bottomSettingMenuBox}>
                <span className="my-label">My프로필</span>
                <div className="right-titles">
                    <Dropdown menu={{ items }} placement="topRight" arrow={{ pointAtCenter: true }}>
                        <span>설정</span>
                    </Dropdown>
                    <InviteModal open={modalOpen} setOpen={setModalOpen} />
                    <span>로그아웃</span>
                </div>
            </div>
        </div>
    );
}

export default SidebarContainer;
