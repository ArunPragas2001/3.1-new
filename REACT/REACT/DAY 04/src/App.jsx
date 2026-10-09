import Header from "./component/Header";
import UseEffectComponent from "./component/UseEffectComponent";
import { UserContext } from "./component/UserContext";
import UseReducerComponent from "./component/UseReducerComponent";
import UseRefComponent from "./component/UseRefComponent";

function App() {

    return (
            <>
                <UserContext.Provider value="Kamal">
                    <Header />
                </UserContext.Provider>
                {/* useContext allows components to access shared data without passing props through every level.
                Without Context, user information may need to be passed through every component.
                Context can provide the data directly to components that need it. */}

                <UseEffectComponent />
                <UseRefComponent/>
                    {/* useRef is used to:
                                            * access DOM elements
                                            * store a value without causing a re-render */}
                <UseReducerComponent/>
                {/* useReducer is useful for managing more complex state logic. */}

            </>
    );
}

export default App;
