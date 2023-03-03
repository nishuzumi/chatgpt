import { Component, For } from "solid-js"
import { createStoredSignal } from "../lib/createStoredSignal"
import { activateSession, setActivateSession } from "../store"

type SessionTitle = string

export default () => {
    const [session, setSession] = createStoredSignal<SessionTitle[]>('session', [])

    return <div bg-slate bg-op-15 h-full overflow-hidden>
        <For each={session()}>
            {(item, index) => <ChatSession i={index()} title={item} />}
        </For>
    </div>
}

const NewChat = () => { }

interface ChatSessionProps {
    i: number
    title: string
}

const ChatSession:Component<ChatSessionProps> = ({i,title}) => {
    // change global state for session
    const onClick = () => {
        setActivateSession(i);
    }

    return <div m-2 p-3 rounded-md bg-slate onClick={onClick} class={`${activateSession() == i && "bg-op-20"}`}>
        {title}
    </div>
}