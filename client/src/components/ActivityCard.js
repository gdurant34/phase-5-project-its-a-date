import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Modal } from 'react-responsive-modal';
import './ActivityCard.css'
import { activityUpdateModalStateAtom } from '../recoil/atoms'
import { useRecoilState } from 'recoil'
import UpdateActivityForm from "./UpdateActivityFrom";

function ActivityCard({ activity }) {
    const [open, setOpen] = useRecoilState(activityUpdateModalStateAtom);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // console.log(activity)


    return (
        <Card>
            <Image src={activity.image} />
            <section>
                <Card.Content
                    header={activity.title}
                    meta={activity.category}
                    description={activity.description}
                />
            </section>
            <section>
                <button onClick={onOpenModal}>Edit</button>
                <Modal open={open} onClose={onCloseModal} center>
                    <UpdateActivityForm />
                </Modal>
            </section>
        </Card>
    );
};

export default ActivityCard;