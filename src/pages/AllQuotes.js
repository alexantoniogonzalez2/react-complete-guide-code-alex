import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Teaching React...'},
  {id: 'q2', author: 'Alex', text: 'Learning React...'},
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;

