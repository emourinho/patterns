const DataContext = React.createContext();
const useData = React.useContext(DataContext)

function App() {
  const data = {}

  return (
    <DataContext.Provider value={data}>
      <SideBar />
      <Content />
    </DataContext.Provider>
  )
}

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>


function ListItem() {
  const { data } = useData();
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = useData();
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = useData();
  return <div>{data.title}</div>;
}