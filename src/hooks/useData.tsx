import { useEffect, useState } from "react";
interface UseDataResponse {
  data: Data | null;
  error: Error | null;
  PersonalInfo: PersonalInfo | null;
  Contact: ContactInfo | null;
  FrontEndOptions: any;
  skills: any;
  BackendOptions: any;
  ToolsOptions: any;
}
const useData = (): UseDataResponse => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const FrontEndOptions = data?.skills?.FrontEndOptions;
  const BackendOptions = data?.skills?.BackendOptions;
  const ToolsOptions = data?.skills?.ToolsOptions;
  const [PersonalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [Contact, setContact] = useState<ContactInfo | null>(null);
  useEffect(() => {
    fetch("/Data/data.json")
      .then((res) => res.json())
      .then((datas: Data) => {
        setData(datas);
        setPersonalInfo(datas?.personalInfo);
        setContact(datas?.Contact); // Update this line
      })
      .catch((err: Error) => {
        setError(err);
      });
  }, []);

  return {
    data,
    error,
    PersonalInfo,
    Contact,
    skills: data?.skills,
    FrontEndOptions,
    ToolsOptions,
    BackendOptions,
  };
};

interface Data {
  personalInfo: PersonalInfo;
  Contact: ContactInfo;
  skills: any;
  FrontEndOptions: any;
  // Add other properties as needed
}

interface PersonalInfo {
  name: string;
  secondName: string;
  title: string;
  bio: string;
  profilePicture: string;
  location: string;
}

interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  phoneOne: string;
  phoneTwo: string;
  whatsapp: string;
  faceBook: string;
  instagram: string;
  githubUser: string;
}

export default useData;
