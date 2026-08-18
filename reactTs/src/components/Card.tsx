import type {PropsWithChildren, ReactNode} from 'react' // for children

interface CardProps extends PropsWithChildren{
  title: string;
  footer?: ReactNode // convention:: Html elements are react nodes
}

export function Card({title, children, footer}:CardProps) { // children must come from PropsWithChildren
  return (
   <section>
    <h1>
      {title}
    </h1>
    <div>{children}</div>
    {footer&& <footer>{footer}</footer>}
   </section>
  )
}

