import './App.css'
// import DynamicList from "./Components/Challenge1/DynamicList"
// import Alert from "./Components/Challenge2/Alert"
// import LiveChCounter from "./Components/Challenge3/LiveChCounter"
// import MultistepForm from "./Components/Challenge4/MultistepForm"
// import ApiDataViewer from "./Components/Challenge5/ApiDataViewer"
// import LoginForm from "./Components/Challenge6/LoginForm"
// import SearchBar from "./Components/Challenge7/SearchBar"
// import Modal from "./Components/Challenge8/Modal"
// import SettingSection from "./Components/Challenge9/SettingSection"
// import ThemeToggle from './Components/Challenge10/ThemeToggle'
// import Header from './Components/Challenge11/Header'
// import Accordion from './Components/Challenge12/Accordian'
// import { ToastProvider } from './ToastContext';
// import SettingsPanel from './DeeplyNestedComponent';
// import AppContent from './Components/Challenge14/AppContent'
// import { AuthProvider } from './Components/Challenge14/AuthContext'
// import BuggyWidget from './Components/Challenge15/BuggyWidget'
// import ErrorBoundary from './Components/Challenge15/ErrorBoundary'
// import UserProfile from './Components/Challenge16/UserProfile'
// import SignupForm from './Components/Challenge18/SignupForm'

function App() {

  // const products = [
  //   { id: 1, name: 'Laptop', price: 1000 },
  //   { id: 2, name: 'Headphones', price: 200 },
  //   { id: 3, name: 'Keyboard', price: 150 },
  // ];
  // const [currentId, setCurrentId] = useState(1);
  // const [showProfile, setShowProfile] = useState(true);

  return (
    <>
      {/* Challenge_1 : Dynamic List Manager */}
      {/* <DynamicList/> */}

      {/* Challenge_2 : AutoAlert */}
      {/* <Alert type={"success"} message={"Welcome To Our Website"} duration={5000}/> */}

      {/* Challenge_3 : Live character Counter */}
      {/* <LiveChCounter/> */}

      {/* Challenge_4 : Multi step form */}
      {/* <MultistepForm/> */}

      {/* Challenge_5 : ApiDataViewer */}
      {/* <ApiDataViewer/> */}

      {/* Challenge_6 : LoginForm Validator */}
      {/* <LoginForm/> */}

      {/* Challenge_7 : SearchBar */}
      {/* <SearchBar/> */}

      {/* Challenge_8 : Modal */}
      {/* <Modal isOpen={isOpen} onClose={()=> setIsOpen(false) }>
        <h2>I'm in Portal</h2>
        <p>Inspect Element on me, ={">"}&gt; direct child of the body tag</p>
      </Modal> */}

      {/* Challenge_9 : Tabs */}
      {/* <div className="tabs-container">
        <header><h1>My DashBoards</h1></header>
        <main>
          <SettingSection />
          <hr />
          <ProfileSection/>
        </main>
      </div> */}

      {/* Challenge_10 : ToggleTheme */}
      {/* <ThemeToggle/> */}

      {/* Challenge_11 : GlobalContext */}
      {/* <ThemeProvider>
        <div className="app-container">
          <Header />
          <PageContent />
        </div>
      </ThemeProvider> */}

      {/* Challenge_12 : Accordion */}
      {/* <div style={{ maxWidth: '600px', margin: '50px auto' }}>
        <h1>Compound Component Pattern</h1>

        <Accordion>

          <Accordion.Item index={1}>
            <Accordion.Title>
              What is React?
            </Accordion.Title>
            <Accordion.Content>
              <p>React is a JavaScript library for building user interfaces.</p>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item index={2}>
            <Accordion.Title>
              <span role="img" aria-label="fire">🔥</span> Why use Components?
            </Accordion.Title>
            <Accordion.Content>
              <form>
                <label>It makes code reusable!</label>
                <input type="text" placeholder="Agree?" />
              </form>
            </Accordion.Content>
          </Accordion.Item>

        </Accordion>
      </div> */}

      {/* Challenge_13: ToastManager */}
      {/* <ToastProvider>
        <div className="App">
          <h1>React Portal Demo</h1>
          <div style={{ overflow: 'hidden', height: '100px', border: '2px dashed red' }}>
            <SettingsPanel />
          </div>
        </div>
      </ToastProvider> */}

      {/* challenge_14: RBAC */}
      {/* <AuthProvider>
        <AppContent />
      </AuthProvider> */}

      {/* Challenge_15: CrashProof */}
      {/* <ErrorBoundary>
        <BuggyWidget title="Stock Ticker" />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyWidget title="News Feed" />
      </ErrorBoundary> */}

      {/* Challenge_16: Poor man's Redux */}
      {/* <StoreProvider>
        <Navbar />
        <div style={{ padding: '20px', display: 'flex', gap: '20px' }}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </StoreProvider> */}

      {/* Challenge_17: Smart Data Fetcher */}
      {/* <div style={{ maxWidth: '500px', margin: '50px auto' }}>
        <h1>Mini React Query</h1>

        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <button onClick={() => setCurrentId(1)}>Load User 1</button>
          <button onClick={() => setCurrentId(2)}>Load User 2</button>
          <button onClick={() => setCurrentId(3)}>Load User 3</button>
          <button onClick={() => setShowProfile(!showProfile)}>
            {showProfile ? 'Unmount Component' : 'Mount Component'}
          </button>
        </div>

        <div style={{ minHeight: '200px' }}>
          {showProfile && <UserProfile userId={currentId} />}
        </div>

        <div style={{ marginTop: '20px', fontSize: '0.9em', color: '#555' }}>
          <strong>Instructions:</strong>
          <ol>
            <li>Click "User 1". Wait for load.</li>
            <li>Click "User 2". Wait for load.</li>
            <li>Click "User 1" again. <strong>Notice it's instant? (Cache)</strong></li>
            <li>Click "User 3" then IMMEDIATELY click "User 2".</li>
            <li>Check Console. You will see <strong>"Request cancelled"</strong>.</li>
          </ol>
        </div>
      </div> */}

      {/* Challenge_18: Self Validating Form */}
      {/* <SignupForm /> */}



    </>
  )
}

export default App
