package cloud.app.project.server.repository

import cloud.app.project.server.model.OtherAsset
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Repository
interface OtherAssetRepo: JpaRepository<OtherAsset, String> {
}