import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../../api";
import Pagination from "../Movie/pagination";

function People() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const { data } = useQuery({
    queryKey: ["people", page],
    queryFn: () => fetchPeople(page),
  });

  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (data) {
      setPeople(data.results);
    }
  }, [data]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <>
      <div className="mt-5 mb-5 flex gap-16 justify-center flex-wrap">
        {people.map((person) => (
          <Link to={`/people/${person.id}`} key={person.id}>
            <div className="flex flex-col items-center">
              <img
                src={`http://image.tmdb.org/t/p/w342${person.profile_path}`}
                alt={person.name}
                className="w-28 h-28 object-cover rounded-full"
              />
              <h3 className="text-sm text-center mt-2 whitespace-nowrap">{person.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={handlePageChange} />
    </>
  );
}

export default People;
