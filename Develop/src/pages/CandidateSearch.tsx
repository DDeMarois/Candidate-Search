import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCandidate = async () => {
      const result = await searchGithub();
      setCandidates(result);
      setCandidate(result[0]);
    };
    fetchCandidate();
  }, []);

  const handleNextCandidate = () => {
    if (index < candidates.length - 1) {
      setIndex(index + 1);
      searchGithubUser(candidates[index + 1].login);
      setCandidate(candidates[index + 1]);
    } else {
      setCandidate(null);
    }
  };

  const handleSaveCandidate = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
      handleNextCandidate();
    }
  };

  if (!candidate) {
    return <h1>No more candidates available</h1>;
  }

  return (
    <div>
      <h1>CandidateSearch</h1>
      <div>
        <img src={candidate.avatar_url} alt={candidate.name} />
        <p>Name: {candidate.name}</p>
        <p>Username: {candidate.login}</p>
        <p>Location: {candidate.location}</p>
        <p>Email: {candidate.email}</p>
        <p>Company: {candidate.company}</p>
        <a href={candidate.html_url}>Profile</a>
      </div>
      <button onClick={handleSaveCandidate}>+</button>
      <button onClick={handleNextCandidate}>-</button>
    </div>
  );
};

export default CandidateSearch;
