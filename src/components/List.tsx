import { Item } from "./Item"
import type { ItemData } from "./ItemData"

type ListProps = {

    title: string;
    items: ItemData[];

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