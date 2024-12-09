import { useEffect, useState } from 'react';
import Candidate from '../interfaces/Candidate.interface';

  const SavedCandidates = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      setCandidates(savedCandidates);
    }, []);

    const handleNextCandidate = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
    };

    if (candidates.length === 0) {
      return <h1>No candidates have been accepted.</h1>;
    }

    const currentCandidate = candidates[currentIndex];

    return (
      <>
        <h1>Potential Candidates</h1>
        {candidates.length > 0 ? (
          <div>
            <img src={currentCandidate.avatar_url} alt={currentCandidate.name} />
            <p>Name: {currentCandidate.name}</p>
            <p>Username: {currentCandidate.login}</p>
            <p>Location: {currentCandidate.location}</p>
            <p>Email: {currentCandidate.email}</p>
            <p>Company: {currentCandidate.company}</p>
            <a href={currentCandidate.html_url}>Profile</a>
            <button onClick={handleNextCandidate}>-</button>
          </div>
        ) : (
          <p>No candidates have been accepted.</p>
        )}
      </>
    );
  };

  export default SavedCandidates;
