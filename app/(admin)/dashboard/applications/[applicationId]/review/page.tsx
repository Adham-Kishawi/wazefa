type Props = {
    params: Promise<{applicationId: string}>
}

async function ApplicationReviewPage({params}: Props) {
    const {applicationId} = await params;
    return (
        <div>
            <h1>Review Application {applicationId}</h1>
        </div>
    )
}
export default ApplicationReviewPage;