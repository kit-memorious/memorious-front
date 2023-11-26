import React from "react";
import { Modal } from "antd";

function EditScheduleModal({ open, setOpen }) {
    const title = "일정 수정";

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal centered title={title} open={open} onOk={handleOk} onCancel={handleCancel} okText="추가" cancelText="취소">
                aaaa
            </Modal>
        </div>
    );
}

export default EditScheduleModal;
