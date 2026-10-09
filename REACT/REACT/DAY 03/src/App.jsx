import './App.css'
import FunctionalComponent from './component/FunctionalComponent.jsx'
import GreetClass from './component/GreetClass.jsx'
import StudentClass from './component/StudentClass.jsx'
import StudentCom from './component/StudentCom.jsx'
import StringState from './component/StringState.jsx'
import BooleanState from './component/BooleanState.jsx'
import ObjectState from './component/ObjectState.jsx'
import ArrayObject from './component/ArrayObject.jsx'
import OnChangeEvent from './component/OnChangeEvent.jsx'
import OnSubmitForm from './component/OnSubmitForm.jsx'
import RenderingList from './component/RenderingList.jsx'
import RenderingListWithKey from './component/RenderingListWithKey.jsx'
import CompleteList from './component/CompleteList.jsx'
import ConditionRendingWithTernary from './component/ConditionRendingWithTernary.jsx'
import UseEffectHook from './component/UseEffectHook.jsx'
import UseEffectWithState from './component/UseEffectWithState.jsx'

function App() {
  return (
    <div>
      <FunctionalComponent name="Suleka" />
      <GreetClass name="Suleka" />
      <StudentClass name="Suleka" course="MCC" />
      <StudentCom name="Suleka" course="MCC" age={22} />
      <StudentCom name="Arun" course="KBS" age={21} />
      <StudentCom name="Nethsara" course="DIP" age={23} />
      <hr />
      <StringState />
      <BooleanState />
      <ObjectState />
      <ArrayObject />
      <OnChangeEvent />
      <OnSubmitForm />
      <RenderingList />
      <RenderingListWithKey />
      <CompleteList />
      <ConditionRendingWithTernary />
      <UseEffectHook />
      <UseEffectWithState />
    </div>
  )
}

export default App
