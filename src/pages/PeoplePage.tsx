import { useEffect, useState } from 'react';

import { Loader } from '../components/Loader';
import { getPeople } from '../api';
import { Person } from '../types';

import { PeopleTable } from '../components/PeopleTable/PeopleTable';

export const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getPeople()
      .then(setPeople)
      .catch(() => setHasError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>
      {loading && <Loader />}
      {hasError && (
        <div data-cy="peopleLoadingError" className="notification is-danger">
          An error occurred while fetching people.
        </div>
      )}

      {!loading && !hasError && people.length === 0 && (
        <div data-cy="noPeopleMessage">No people</div>
      )}

      {!loading && !hasError && <PeopleTable people={people} />}
    </>
  );
};
