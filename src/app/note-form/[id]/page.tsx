import Modules from '@containers/PageModules'
import NoteForm from './NoteForm'

export default function Page({ params }) {
    const { id } = params
    return (
        <Modules>
            <NoteForm id={id} />
        </Modules>
    )
}
