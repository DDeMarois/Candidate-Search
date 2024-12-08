import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

  const SavedCandidates = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      setCandidates(savedCandidates);
    }, []);

    return (
      <>
        <h1>Potential Candidates</h1>
        {candidates.length > 0 ? (
          <ul>
            {candidates.map(candidate => (
              <li key={candidate.id}>
                <img src={candidate.avatar_url} alt={candidate.name} />
                <p>Name: {candidate.name}</p>
                <p>Username: {candidate.login}</p>
                <p>Location: {candidate.location}</p>
                <p>Email: {candidate.email}</p>
                <p>Company: {candidate.company}</p>
                <a href={candidate.html_url}>Profile</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No candidates have been accepted.</p>
        )}
      </>
    );
  };

  export default SavedCandidates;
