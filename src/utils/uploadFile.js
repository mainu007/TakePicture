import storage from '@react-native-firebase/storage';

export default async function uploadFile({
  uri,
  fileName,
  type,
  setTransferred,
}) {
  let imageUri;
  const random = parseInt(Date.now() * Math.random(), 10);
  const reference = storage().ref(`images/${random}${fileName}`);
  const task = reference.putFile(uri);

  setTransferred(0);

  task.on('state_changed', (taskSnapshot) => {
    console.log(
      `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
    );

    const progress = Math.round(
      taskSnapshot.bytesTransferred / (taskSnapshot.totalBytes / 100),
    );

    setTransferred(progress);
  });

  try {
    await task;
    console.log('Image uploaded to the bucket!');
    const url = await storage().ref(reference.path).getDownloadURL();
    imageUri = url;
  } catch (error) {
    console.log(error);
  }
  return imageUri;
}
