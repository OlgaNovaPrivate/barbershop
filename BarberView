commit 44407cc14f49e310339b1e8d83cf67c7cdeb7989
Merge: 2bca808 83a3106
Author: Olga Rykanova <olga.rykanova.private@gmail.com>
Date:   Sun Nov 19 18:45:24 2023 +0200

    On main: some stuff

diff --cc client/src/views/admin/Barbers.js
index 532d18f,532d18f..8faabe6
--- a/client/src/views/admin/Barbers.js
+++ b/client/src/views/admin/Barbers.js
@@@ -16,6 -16,6 +16,7 @@@ import GlobalStyle from '../../theme/gl
  import {useBarbers} from '../../hooks/useBarbers';
  
  export const Barbers = props => {
++  console.log('Props:', props);
    const {service, date, time, barberId} = props.barbers;
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
@@@ -27,6 -27,6 +28,7 @@@
        setBarbers(result.data.data);
      };
    }, [user, navigate]);
++
    return (
      <Container>
        <Upcoming>
