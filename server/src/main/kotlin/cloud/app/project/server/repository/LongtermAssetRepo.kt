package cloud.app.project.server.repository

import cloud.app.project.server.model.LongtermAsset
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface LongtermAssetRepo: JpaRepository<LongtermAsset, String> {
}