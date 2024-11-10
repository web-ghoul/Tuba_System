import { useContext } from 'react';
import { FormsContext } from '../../contexts/FormsContext';
import { ModalsContext } from '../../contexts/ModalsContext';

const useDeleteSubmit = () => {
  // const { token } = useSelector((state: RootState) => state.auth);
  // const { server } = useAxios(token || '');
  const { handleCloseFormsLoading, handleOpenFormsLoading } =
    useContext(FormsContext);
  const { handleCloseDeleteModal } = useContext(ModalsContext);

  // const navigate = useNavigate();
  // const dispatch = useDispatch<AppDispatch>();
  // const { id } = useParams();
  // const { pathname } = useLocation();

  const handleDelete = async () => {
    handleOpenFormsLoading();
    handleCloseDeleteModal();
    handleCloseFormsLoading();
  };

  return { handleDelete };
};

export default useDeleteSubmit;
