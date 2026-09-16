import { Person } from '../../types';
import { PersonLink } from '../PersonLink/PersonLink';
import { useParams } from 'react-router-dom';

interface PeopleTableProps {
  people: Person[];
}

export const PeopleTable = ({ people }: PeopleTableProps) => {
  const { slug } = useParams<{ slug: string }>();

  const getRelative = (relativeName: string | null) => {
    if (!relativeName) {
      return null;
    }

    return people.find(person => person.name === relativeName);
  };

  return (
    <table data-cy="peopleTable" className="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <tr
            key={person.slug}
            data-cy="person"
            className={person.slug === slug ? 'has-background-warning' : ''}
          >
            <td>
              <PersonLink person={person} />
            </td>
            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>
              {getRelative(person.motherName) ? (
                <PersonLink person={getRelative(person.motherName)} />
              ) : (
                person.motherName || '-'
              )}
            </td>
            <td>
              {getRelative(person.fatherName) ? (
                <PersonLink person={getRelative(person.fatherName)} />
              ) : (
                person.fatherName || '-'
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
