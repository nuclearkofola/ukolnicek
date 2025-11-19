import { Item, ItemProps } from "./Item"

type ListProps = {

    title: string;
    items: ItemProps[];

}

export const List = ({ title, items }: ListProps) => {
    return (
        
        <div>

            <h1>{title}</h1>

            {items.map((item) => (

                <Item 
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    done={item.done}
                />

            ))}

        </div>

    );
}