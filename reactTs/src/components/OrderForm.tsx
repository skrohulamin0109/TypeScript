import { useState } from "react";

interface OrderFormProps {
    onSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
    const [name, setName] = useState<string>("masala");
    const [cups, setCups] = useState<number>(1);

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
      e.preventDefault();
      onSubmit({name, cups})
    }
    
    return <form onSubmit = {handleSubmit}>
      <label htmlFor="">Chai Name</label>
      <input 
      value = {name}
      // very simple, don't stress it
      onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />

      <label htmlFor="">Cups</label>
      <input 
      type="number"
      value = {cups}
      // very simple, don't stress it
      onChange = {(e: React.ChangeEvent<HTMLInputElement>) => setCups(Number(e.target.value) || 0)}
      />

      <button type="submit">Place Order</button>

    </form>;
}
