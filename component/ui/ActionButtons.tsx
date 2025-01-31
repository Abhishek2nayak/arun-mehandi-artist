import { Book, ClipboardCheck, Mail, Phone } from "lucide-react";
import { Button } from "./Button";

interface ActionButtonsProps {
    callAction: () => void;
    bookAction: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
    callAction,
    bookAction,
}) => {
    return (
        <div className="flex justify-center gap-4 mt-5">
            <Button icon={<ClipboardCheck />} variant="outline" size="lg">
                Book Now
            </Button>
            <Button icon={<Phone />} variant="primary" size="lg">
                Call Us
            </Button>
        </div>
    );
};

export default ActionButtons;
