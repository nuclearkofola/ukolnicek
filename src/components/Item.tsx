import './Item.css'

export type ItemProps = {
    title: string;
    description: string;
    done: boolean;
}

export const Item = ({ title, description, done }: ItemProps) => {
    return (
        <div className={`item ${done ? 'done' : ''}`}>
            <p><strong>{title}</strong></p>
            <p>{description}</p>
        </div>
    );
}

