import { BreadCrumbItem } from "@/components/SideNav/model";
import Layout from "./../Layout";
import DummyContentList from "@/components/DummyContentList";

const breadCrumbs: BreadCrumbItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Contacts",
    url: "/contacts",
  },
];

const ContactsPage = () => {
  return (
    <Layout titleToActivate="Contacts" breadcrumbs={breadCrumbs}>
      <DummyContentList />
    </Layout>
  );
};

export default ContactsPage;
