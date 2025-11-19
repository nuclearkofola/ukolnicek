import './App.css'
import { useState } from 'react'
import { List } from './components/List'
import type { ItemProps } from './components/Item'

function App() {
  const [tasks] = useState<ItemProps[]>([
    {
      title: 'Příprava prezentace',
      description: 'Vytvořit prezentaci pro páteční meeting s klientem.',
      done: false
    },
    {
      title: 'Kontrola e-mailů',
      description: 'Projít doručenou poštu a odpovědět na důležité zprávy.',
      done: true
    },
    {
      title: 'Plánování kampaně',
      description: 'Naplánovat marketingovou kampaň na příští měsíc.',
      done: false
    },
    {
      title: 'Testování aplikace',
      description: 'Otestovat nové funkce a nahlásit případné chyby.',
      done: false
    }
  ]);

  return (
    <div>
      <h1>Úkolníček</h1>
      <List title="Moje úkoly" items={tasks} />
    </div>
  )
}

export default App
