// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    name: string;
    login: string;
    location?: string;
    email?: string;
    company?: string;
    avatar_url: string;
    html_url: string;
}
export default Candidate;