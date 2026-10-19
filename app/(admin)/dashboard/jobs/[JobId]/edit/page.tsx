type Props ={
    params: Promise<{JobId: string}>;
    
};

async function EditJobPage({params}: Props) {
    const {JobId} = await params;
    return (
        <div>
            <h1>Edit Job {JobId}</h1>
        </div>
    )
}

export default EditJobPage; 
