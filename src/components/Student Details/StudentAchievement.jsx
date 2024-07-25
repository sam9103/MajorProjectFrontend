import  { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const StudentAchievement = () => {
  const [achievements, setAchievements] = useState([]);
  const [formData, setFormData] = useState({
    studentName: '',
    achievementTitle: '',
    achievementDate: '',
    details: '',
    certificate: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({ ...prevData, certificate: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAchievements([...achievements, formData]);
    setFormData({
      studentName: '',
      achievementTitle: '',
      achievementDate: '',
      details: '',
      certificate: null,
    });
  };

  const handleBack = () => {
    navigate('/Internships'); 
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Student Achievements</h1>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-4">
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Student Name</label>
            <input
              type="text"
              id="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student Name"
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="achievementTitle" className="block text-sm font-medium text-gray-700">Achievement Title</label>
            <input
              type="text"
              id="achievementTitle"
              value={formData.achievementTitle}
              onChange={handleChange}
              placeholder="Achievement Title"
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="achievementDate" className="block text-sm font-medium text-gray-700">Achievement Date</label>
            <input
              type="date"
              id="achievementDate"
              value={formData.achievementDate}
              onChange={handleChange}
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">Details</label>
            <textarea
              id="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Details about the achievement"
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
              rows="4"
              required
            />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <label htmlFor="certificate" className="block text-sm font-medium text-gray-700">Upload Certificate</label>
            <input
              type="file"
              id="certificate"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              className="mt-1 px-3 py-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto">
          Add Achievement
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4 text-center">Achievement List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Achievement Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {achievements.map((achievement, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{achievement.studentName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.achievementTitle}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.achievementDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{achievement.details}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {achievement.certificate ? achievement.certificate.name : 'No certificate'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleBack}
        className="mt-6 bg-gray-500 text-white py-2 px-4 rounded w-full md:w-auto"
      >
        Back
      </button>
    </div>
  );
};

export default StudentAchievement;