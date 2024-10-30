import Modules from '@containers/PageModules'
import NoteDetails from './NoteDetails'

export default function Page({ params }) {
    const { id } = params
    return (
        <Modules>
            <NoteDetails id={id} />
        </Modules>
    )
}
